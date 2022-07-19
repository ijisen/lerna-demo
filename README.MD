
##lerna常用命令

```
# 使用 lerna 标记版本，会根据哪些文件有变动，来提示你将哪些包的版本进行修改
# 并进行一次 git commit 提交，打上相应的 git tag
# 1. 更新包版本
# 2. git commit 和 git tag
# 3. 推送到 remote
lerna version

# 在上一步的基础上，生成 changelog 文件，以及根据 commit 来自动进行版本变动
lerna version --conventional-commits --yes

# lerna version 成功后，就可以使用 publish 命令发布到 npm 仓库中了
# 相当于 lerna version + lerna publish from-git
lerna publish

# 发布当前 commit 中打上 tag version 的包
lerna publish from-git

# 例如：如果 package1 必须在 package2 build 之后才能被 build，那么我们就要将 package1 作为依赖
# 添加到 package2 的 package.json 中。至于选择添加到 dependencies 还是 devDependencies 都可以，
# 取决于具体需求场景，但两者都是可以被 lerna 正确解析的拓扑结构
# 最后当拓扑结构都配置好后，我们就通过 lerna 提供的一个 --sort 参数告诉 lerna 要以拓扑顺序的方式
# 执行每一个 package的某脚本
lerna run --sort build

# 发布 package.json 中的 pkg.json 上的 version 在 registry（高于 latest version） 不存在的包
lerna publish from-packages

# yarn workspace负责一些依赖包的管理工作，最后发布到npm的时候，还是推荐使用 lerna 来进行发布
# 至于后面要不要跟设么参数，再碰到需要的时候，去根据实际情况去百度吧
lerna publish [param] 

lerna bootstrap  // 安装所有依赖项并链接任何交叉依赖项
//例: lerna bootstrap --npm-client yarn --use-workspaces

lerna exec       // 在每个包中执行任意命令
//例: lerna exec 'yarn remove lodash' // 删除

lerna add        // 安装依赖，支持交叉依赖
// lerna add packageA --scope=packageB
lerna add lodash  // 为所有 package 增加 lodash 模块 
// 为 @monorepo/utils 增加 lodash 模块
lerna add lodash --scope @monorepo/utils  
// 为 @monorepo/utils 增加 内部模块@monorepo/components
lerna add @monorepo/components --scope @monorepo/utils 


// 版本发布
lerna changed    // 检查自上次发布以来哪些软件包已经更新
lerna diff       // 自上次发布以来，对所有包或单个包进行区分
lerna publish    // 发布版本

// 常用
lerna clean      // 清除项目中所有 node_modules
lerna init       // 初始化项目
lerna create     // 创建项目中的子package

// 其它
lerna run        // 在包含该脚本的包中运行 npm 脚本
lerna info       // 查看信息
lerna import     // 导入
lerna link       // 软链
lerna version    // 查看版本
lerna ls         // 列出当前 lerna 项目中的公共包

```