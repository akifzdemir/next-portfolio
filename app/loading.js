export default function Loading() {
  return (
    <div
      id="loading"
      className="
            h-screen 
            z-50 w-full right-0 top-0 relative
          bg-white
          text-black
          dark:bg-zinc-900
          dark:text-white
            flex justify-center
            items-center"
    >
      <div className="flex flex-row gap-5">
        <div className="rounded-full animate-bounce w-14 h-14 bg-gradient-to-tr from-black to-slate-200 dark:from-white dark:to-zinc-800"></div>
        <div className="rounded-full animate-bounce w-14 h-14 bg-gradient-to-tr from-black to-slate-200 dark:from-white dark:to-zinc-800 "></div>
        <div className="rounded-full animate-bounce w-14 h-14 bg-gradient-to-tr from-black to-slate-200 dark:from-white dark:to-zinc-800"></div>
      </div>
    </div>
  );
}
