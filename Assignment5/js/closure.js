const app=(
    
    function (){ 
        let result=0;
        
        function add(){
            const first=parseInt(document.getElementById("firstValue").value);
            const second=parseInt(document.getElementById("secondValue").value);
            result=first+second;
        }
        function sub(){
            const first=parseInt(document.getElementById("firstValue").value);
            const second=parseInt(document.getElementById("secondValue").value);
            result=first-second;
        }
        function mul(){
            const first=parseInt(document.getElementById("firstValue").value);
            const second=parseInt(document.getElementById("secondValue").value);
            result=first*second;
        }
        function div(){
            const first=parseInt(document.getElementById("firstValue").value);
            const second=parseInt(document.getElementById("secondValue").value);
            result=first/second;
        }
        function setResult(){
            const span=document.getElementById("result");
            span.innerHTML=result;
        }
        
        return {
            addition:()=>{
                add();
                setResult();
            },
            subtract:()=>{
                sub();
                setResult()
            },
            multiplication:()=>{
                mul();
                setResult();
            },
            division:()=>{
                div();
                setResult();
            },
            counterValue:()=>result
        }
    }
)();