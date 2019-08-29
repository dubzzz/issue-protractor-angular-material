# Issue when testing ``@angular/material` components with protractor

This repository contains a minimal reproduction case for an issue I encountered when trying to test `@angular/material` with Protractor.

It looks as if Protractor was not properly waiting for the end of `@angular/material` animations.

## How to reproduce?

```bash
# Shell 1

git clone https://github.com/dubzzz/issue-protractor-angular-material.git
cd issue-protractor-angular-material

npm install
npm run start

# Shell 2

npm run e2e:noserver  # as the execution is flaky
                      # you may need to run it multiple times in a row
```

## Potential workaound

Wait for something to appear quickly (100ms?):

- Either `await browser.sleep(100)`
- Or `await browser.wait(..., 100)`
