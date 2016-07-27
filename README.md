now-fs-bug
==========

This repo demonstrates a limitation of [nowjs](https://zeit.co/now)

## Steps

- Clone this repo
- `npm start`: Notice it succeeds
- `now`: Notice it fails

## Missing node_modules

The first error I see in the logs complains about missing the `node_modules` directory

> ▲ npm install
> Error { Error: ENOENT: no such file or directory, scandir '/home/nowuser/src/node_modules'
>     at Error (native)
>   errno: -2,
>   code: 'ENOENT',
>   syscall: 'scandir',
>   path: '/home/nowuser/src/node_modules' }

But the process continues afterwards. Perhaps this should be a warning instead of an error?

## Permission denied

This is the part I'm worried about

> ▲ npm start
> FAIL { Error: EACCES: permission denied, open '/home/nowuser/src/boom.txt'
>     at Error (native)
>   errno: -13,
>   code: 'EACCES',
>   syscall: 'open',
>   path: '/home/nowuser/src/boom.txt' }
> start exited with status 0

It seems the process doesn't have the correct permissions to write to disk...