class Calculator{
    constructor(displayElement){
        this.displayElement=displayElement
        this.clear()

    }
    appendNum(num){
        this.displayContent+=num
    }
    operator(opt){
        if(this.optcheck)return
        this.displayContent+=opt
        this.optcheck=true
    }
    update(){
        this.displayElement.value=this.displayContent
    }
    cal(){
        if(!this.optcheck)return
        this.displayContent=eval(this.displayContent
            .replace('\u00D7','*')
            .replace('\u00F7','/'))
        this.update()
        this.optcheck=false
    }
    clear(){
        this.displayContent=""
        this.displayElement.value=0
        this.optcheck=false
    }
}

const btn=document.querySelectorAll('button')
const displayElement=document.querySelector('input')

const Cal=new Calculator(displayElement)


btn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        switch(btn.dataset.type){
            case 'operator':
                Cal.operator(btn.innerText)
                break;
            case 'ac':
                Cal.clear()
                break;
            case 'equals':
                Cal.cal()
                break;
            default:
                Cal.appendNum(btn.innerText)
                Cal.update()
                break;

        }
    })
})
