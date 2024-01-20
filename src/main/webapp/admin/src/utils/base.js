const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm9g891/",
            name: "ssm9g891",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm9g891/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园购物网站"
        } 
    }
}
export default base
