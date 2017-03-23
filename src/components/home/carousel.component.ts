import { Component, NgZone } from '@angular/core';
//import { ZoneTask } from "@angular/core/src/zone";
//import { RestService } from '../../services/rest.service';
import { Slide } from '../../models';
@Component({
    selector: 'carousel-component',
    template: require('./carousel.component.html')
})
export class CarouselComponent {
    slides: Array<Slide> = [];
    nextSlideNdx: number = 0;
    currentSlideNdx: number = 0;
    currentTimeout: number = 0;
    animationInterval: number = 1000;
    slideInterval: number = 5000;
    slideTimer: number = 0;
    autoSlide: boolean = true;
    intervalRunning: boolean = false;
    constructor() {
        let slide = <Slide>{
            url:"#",
            imageUrl:"http://placekitten.com/900/400",
            type: "Content Type",
            title: "Client Name: Made with Adobe Illustrator",
            active: true,
            prev: false,
            right:false,
            left: false
        };
        let slide2 = <Slide>{
            url:"#",
            imageUrl:"http://placekitten.com/900/400",
            type: "Content Type2",
            title: "Client Name2: Made with Adobe Illustrator",
            active: false,
            prev: false,
            right:false,
            left: true,
            next: false
        };
        let slide3 = <Slide>{
            url:"#",
            imageUrl:"http://placekitten.com/900/400",
            type: "Content Type3",
            title: "Client Name3: Made with Adobe Illustrator",
            active: false,
            prev: false,
            right:false,
            left: true,
            next: false
        };
        this.slides.push(slide);
        this.slides.push(slide2);
        this.slides.push(slide3);

        if(this.autoSlide){
            this.startInterval();
        }
    }
    startInterval(){
        this.slideTimer = setInterval(()=>{
            this.next(true);
            this.intervalRunning = true;
        },this.slideInterval)
    }
    clearInterval(){
        clearInterval(this.slideTimer);
        this.intervalRunning = false;
    }
    next(ignoreClear: boolean){
        if(!ignoreClear)
            this.clearInterval();
        this.currentSlideNdx = this.nextSlideNdx;
        if(this.nextSlideNdx == this.slides.length -1)
            this.nextSlideNdx = 0;
        else
            this.nextSlideNdx++;
        this.transition(true);
    }
    previous(){
        this.clearInterval();
        this.currentSlideNdx = this.nextSlideNdx;
        if(this.nextSlideNdx == 0)
            this.nextSlideNdx = this.slides.length -1;
        else
            this.nextSlideNdx--;
        this.transition(false);
    }

    transition(goForward: boolean){
        if(goForward){
            this.slides[this.nextSlideNdx].left = true;
            this.slides[this.nextSlideNdx].active = true;
            setTimeout(()=>{
                this.slides[this.nextSlideNdx].left = false;
                this.slides[this.currentSlideNdx].right = true;
            },0)
        }
        else{
            this.slides[this.nextSlideNdx].right = true;
            this.slides[this.nextSlideNdx].active = true;
            setTimeout(()=>{
                this.slides[this.nextSlideNdx].right = false;
                this.slides[this.currentSlideNdx].left = true;
            },0)
        }
        this.currentTimeout = setTimeout(()=>{
            this.slides[this.currentSlideNdx].active = false;
            if(goForward)
                this.slides[this.currentSlideNdx].right = false;
            else
                this.slides[this.currentSlideNdx].left = false;
            if(!this.intervalRunning)
                this.startInterval();
        },1000);
    }

}
