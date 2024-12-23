'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Heart, Share2, X } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';
import * as Dialog from '@radix-ui/react-dialog';

interface BlogInteractionsProps {
  slug: string;
}

export function BlogInteractions({ slug }: BlogInteractionsProps) {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = typeof document !== 'undefined' ? document.title : '';

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`/api/blog/like?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch likes');
        }
        const data = await response.json();
        setLikes(data.likes);
        // Check if the post was previously liked
        const wasLiked = localStorage.getItem(`blog-${slug}-liked`) === 'true';
        setIsLiked(wasLiked);
      } catch (error) {
        console.error('Failed to fetch likes:', error);
        setError('Failed to load likes count');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, [slug]);

  const handleLike = async () => {
    if (isLiked || isLoading) return;
    
    try {
      setIsLoading(true);
      setError(null);
      // Optimistic update
      setLikes(prev => prev + 1);
      setIsLiked(true);
      
      const response = await fetch('/api/blog/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update likes');
      }
      
      const data = await response.json();
      setLikes(data.likes);
      localStorage.setItem(`blog-${slug}-liked`, 'true');
    } catch (error) {
      console.error('Failed to like post:', error);
      // Revert optimistic update on error
      setLikes(prev => prev - 1);
      setIsLiked(false);
      setError('Failed to update like count');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4 mt-8">
      <Button
        variant="ghost"
        size="sm"
        className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : ''} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleLike}
        disabled={isLiked || isLoading}
        aria-label={isLiked ? 'Already liked' : 'Like post'}
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''} ${isLoading ? 'animate-pulse' : ''}`} />
        <span>{likes} likes</span>
      </Button>

      <Dialog.Root open={showShare} onOpenChange={setShowShare}>
        <Dialog.Trigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => setShowShare(true)}
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Share this blog post</h2>
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </Dialog.Close>
              </div>
              
              <div className="flex gap-4 justify-center py-4">
                <TwitterShareButton url={shareUrl} title={title}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                
                <FacebookShareButton url={shareUrl} title={title}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                
                <LinkedinShareButton url={shareUrl} title={title}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                
                <WhatsappShareButton url={shareUrl} title={title}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>

              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-2">Or copy link</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 px-3 py-2 text-sm border rounded-md bg-muted"
                  />
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                    }}
                    variant="secondary"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}