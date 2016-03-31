## 标签

git 标签用于版本标记，比如发出版本1.0 后就可以打个标签，这样以后如果需要1.0当时的代码，可以checkout它出来，修改此版本的bug就比较容易了。

## 打一个新标签 

$ git tag v1.0

可以执行
    $ git tag

输出从而查看标签清单。

    v1.0

假设我们继续修改文件，并且提交

    echo line3 >> file1
    git add file1
    git commit -m"commit 3" 

正在修改的不亦乐乎，但是此时有客户反馈说使用的1.0有错，你得获得1.0的代码来修改，以便解决bug。那么就可以修改bug，比如把line1 修改为lineI：

    git checkout tags/v1.0
    git checkout -b bugfix
    sed -i.bak 's/line1/lineI' file1
    git add file1
    git commit -m"bug fix"

对 v1.0 的 bug 修改在分支bugfix内。如果测试通过，你完全可能会考虑把此分支的修改成果合并到主干上，而不必在主干上重复修改此bug ，那么就可以使用合并。

    git merge bugfix    
现在对bugfix的修改也同时反映到master上：

    $ cat file1
    lineI
    lineII
    line3