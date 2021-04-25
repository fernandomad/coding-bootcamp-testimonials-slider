const main=document.querySelector("#main"); 
window.onload=()=>{
    var slider=new Slider(main);
    document.querySelectorAll(".icon-next").forEach(next=>{
        next.addEventListener("click",nextItem)
    });
    document.querySelectorAll(".icon-prev").forEach(prev=>{
        prev.addEventListener("click",prevItem)
    });
    function nextItem(){
        slider.next()
    }
    function prevItem(){
        slider.prev()
    }
}
class Slider{
    currentPosition=0;
    items=[];
    slider;
    constructor(slider){
        this.slider=slider;
        this.items=slider.querySelectorAll(".slider-item");
        this.slider.style.width = `${this.items.length*100}vw`;
    }
    next(){
        this.currentPosition=(this.currentPosition>=this.items.length-1)?0:this.currentPosition+1;
        this.move();
    }
    prev(){
        this.currentPosition=(this.currentPosition<=0)?this.items.length-1:this.currentPosition-1;
        this.move();
    }
    move(){
        let x=this.currentPosition*(-100);
        this.slider.style.transform=`translate(${x}vw,0)`;
    }
}