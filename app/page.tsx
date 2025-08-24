type ProjectVideoProps = { src: string }

function ProjectVideo({ src }: ProjectVideoProps) {
  const isYoutube = src.includes('youtube.com') || src.includes('youtu.be')

  const getYoutubeEmbedUrl = (url: string) => {
    const ytMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    )
    return ytMatch ? `https://www.youtube.com/embed/${ytMatch[1]}` : url
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {isYoutube ? (
          <div className="relative aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              src={getYoutubeEmbedUrl(src)}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        )}
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isYoutube ? (
            <div className="relative aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={getYoutubeEmbedUrl(src)}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          )}
        </MorphingDialogContent>

        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
