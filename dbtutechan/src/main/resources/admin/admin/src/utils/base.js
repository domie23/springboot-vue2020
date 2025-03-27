const base = {
    get() {
        return {
            url : "http://localhost:8080/dbtutechan/",
            name: "dbtutechan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dbtutechan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "东北特产销售系统"
        } 
    }
}
export default base
