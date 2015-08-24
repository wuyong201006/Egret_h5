/**
 * Created by testt on 2015/5/4.
 */
class TimeControl
{
    public constructor()
    {
        //super();
        this.init();
    }

    private init():void
    {
        //开始注册都执行了
        egret.Ticker.getInstance().register(this.printfWord, this);
        //egret.Ticker.getInstance().unregister();
        //egret.Ticker.getInstance().run();

        var timer:egret.Timer = new egret.Timer(1000);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandler, this)
        timer.start();
    }

    private printfWord():void
    {
        //egret.trace("Hello Word!!!");
        //egret.("Hello Word!!!");
        console.log("Hello Word!!!");
    }

    private timerHandler(event:egret.TimerEvent):void
    {

    }

}
