
export default class GameControl extends Laya.Script{

    /** @prop {name:plane,tips:"飞机预置体对象",type:Prefab}*/

    constructor(){
        super();

        
    }

    onEnable(){

        Laya.stage.bgColor = "#ffffff";

        this._gameBox = this.owner.getChildByName("gameBox");

        this.plane = Laya.Pool.getItemByCreateFun("plane", this.plane.create, this.plane);
        
        this.plane.pivot(this.plane.width * 0.5, this.plane.height * 0.5);
        this.plane.pos(Laya.stage.width * 0.5, Laya.stage.height * 0.8);

        Laya.stage.addChild(this.plane);
    }

    onUpdate(){

    }

    onStageClick(ev){

    }

    movePlane(x){
        Laya.Tween.clearAll(this.plane);

        if(Math.abs(this.plane.x - x) > 100){
            Laya.Tween.to(this.plane, {x}, 100, Laya.Ease.	
                strongOut);
        } else {
            this.plane.x = x;
        }
    }

    onStageMouseDown(ev){

        var cx = ev.stageX;

        this.movePlane(cx);

        this.mouseDown = true;
    }

    onStageMouseMove(ev){

        var cx = ev.stageX;

        if(this.mouseDown){
            this.onStageMouseDrag(ev)
        }
    }

    onStageMouseUp(){

        this.mouseDown = false;
    }

    onStageMouseDrag(ev){
        this.movePlane(ev.stageX);
    }

}