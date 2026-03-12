import { useEffect, useRef } from 'react';

interface ModelViewerProps {
  modelUrl?: string;
  height?: string;
}

const ModelViewer = ({ modelUrl = "", height = '100%' }: ModelViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only run this code on the client side
    if (typeof window === 'undefined') return;

    // Add WebGI script
    const script = document.createElement('script');
    script.src = 'https://cdn.jewelmounts.com/3d-viewer-script/viewer-0.17.0.js';
    script.async = true;

    // Create a promise to track when script loads
    const scriptPromise = new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });

    document.body.appendChild(script);

    // Inject loader hiding script
    const loaderScript = document.createElement('script');
    loaderScript.textContent = `
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName) {
        const element = originalCreateElement.call(document, tagName);
        const observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            if (mutation.type === 'attributes') {
              const el = mutation.target;
              // If this element gets a class or id that looks like a loader, hide it
              if ((el.id && (el.id.includes('loader') || el.id.includes('Loading') || el.id === 'assetManagerLoadingScreen')) ||
                  (el.className && (el.className.includes('loader') || el.className.includes('Loading')))) {
                el.style.display = 'none';
                el.style.opacity = '0';
                el.style.visibility = 'hidden';
              }
            }
          }
        });
        observer.observe(element, { attributes: true, attributeFilter: ['class', 'id'] });
        return element;
      };
    `;
    document?.head?.appendChild(loaderScript);

    // Wait for script to load, then create the viewer
    scriptPromise.then(() => {
      if (!containerRef.current) return;

      // Clear container before adding viewer
      while (containerRef.current?.firstChild) {
        containerRef.current?.removeChild(containerRef.current?.firstChild);
      }

      // Create WebGI viewer element
      const viewer = document.createElement('webgi-viewer');
      if (viewer) {
        viewerRef.current = viewer;
        viewer.id = 'ring-viewer';
        viewer.setAttribute('src', modelUrl);
        viewer.setAttribute('disable-loader', '');
        viewer.setAttribute('camera-controls', 'true');
        viewer.setAttribute('disable-zoom', 'true');
        viewer.setAttribute('background-color', 'transparent');
        viewer.setAttribute('auto-rotate', '');
        viewer.setAttribute('interaction-prompt', 'auto-rotate');
        viewer.setAttribute('rotation-per-second', '30deg');
        viewer.setAttribute('camera-orbit', '0deg 60deg 3m');
        viewer.setAttribute('camera-target', '0m 0.5m 0m');
        viewer.setAttribute('field-of-view', '35deg');
        viewer.style.height = height;
        viewer.style.width = '100%';
        viewer.style.zIndex = '1';
        viewer.style.display = 'block';
      }
      // Add viewer to container
      containerRef.current.appendChild(viewer);
    }).catch(err => {
      console.error('Error loading WebGI script:', err);
    });

    // Cleanup function
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (loaderScript.parentNode) {
        document.head.removeChild(loaderScript);
      }
    };
  }, [modelUrl]);

  return (
    <div className="relative cursor-pointer w-full h-full">
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ModelViewer;