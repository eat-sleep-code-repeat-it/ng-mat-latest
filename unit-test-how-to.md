# how to do unit test

```bash

ng test --main ./src/app/utest-examples/first-demo.spec.ts
ng test --main ./src/app/utest-examples/first-demo.spec.ts --watch=false

## test-headless
ng test --watch=false --browsers=ChromeHeadless

## test-headless for one file
ng test --main ./src/app/utest-examples/first-demo.spec.ts --browsers=ChromeHeadless --watch=false
ng test --main ./src/app/models/student.spec.ts --browsers=ChromeHeadless --watch=false
```

## Change author name and email

- https://www.git-tower.com/learn/git/faq/change-author-name-email 
- https://stackabuse.com/git-add-all-files-to-a-repo/

```bash
git add **

git remote add origin https://github.com/eat-sleep-code-repeat-it/ng-mat-latest.git 
git push -u origin master

git commit -m "first sanity test" --author="eat-sleep-code-repeat-it eat.sleep.code.repeat@outlook.com"

```