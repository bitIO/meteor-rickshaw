meteor-rickshaw
===============

Rickshaw is a JavaScript toolkit for creating interactive time series graphs. You cand find more details on Rickshaw [here](http://code.shutterstock.com/rickshaw/).

![image](http://code.shutterstock.com/rickshaw/guide/images/graph_example_2.png)

Please, also think that the package uses a git submodule that [may need to be initialized](http://git-scm.com/book/en/Git-Tools-Submodules)

```Shell
$ git submodule init
Submodule 'rack' (git://github.com/chneukirchen/rack.git) registered for path 'rack'
$ git submodule update
Initialized empty Git repository in /opt/myproject/rack/.git/
remote: Counting objects: 3181, done.
remote: Compressing objects: 100% (1534/1534), done.
remote: Total 3181 (delta 1951), reused 2623 (delta 1603)
Receiving objects: 100% (3181/3181), 675.42 KiB | 173 KiB/s, done.
Resolving deltas: 100% (1951/1951), done.
Submodule path 'rack': checked out '08d709f78b8c5b0fbeb7821e37fa53e69afcf433'
```

## Usage Example

    mrt add rickshaw

## Dependencies

    d3js-package