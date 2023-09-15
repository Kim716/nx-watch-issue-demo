# nx-watch-issue-demo

This repo is for demo this [issue](https://github.com/nrwl/nx/issues/18480#issuecomment-1711145293)

## How to reproduce the issue

1. clone this repo
2. some settings you can check:
   - nx is v14.1.9
   - run `$ nx graph`, see `a-lib` depends on `b-lib`
3. run `$ nx run a-lib:build --watch`
4. edit `b-lib.ts` & save, you can see terminal rebuild✅
5. edit `a-lib.ts` & save, you **can't** see terminal rebuild😣

## So.. what's the issue？
When we run the command of step3, our expectation is to see `a-lib` has been build, watch & rebuild when new save occurs.
