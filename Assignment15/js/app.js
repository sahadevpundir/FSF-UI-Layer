$(function(){
            
    $("button").on("click", ()=>{
        let title = $("#title").val();
        let desc = $("#desc").val();
        let uList = $("#uList")
        let li = document.createElement("li");
        const TODO = {
            title:title,
            desc:desc
        }
        li.innerHTML = JSON.stringify(TODO)
        uList.append(li);
    })
        
    
})