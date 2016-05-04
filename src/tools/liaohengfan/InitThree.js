/**
 * Created by Administrator on 2016/5/3.
 */
var InitThree=function(canvas_,w_,h_,fov_,near_,far_,anitialias){
    var scope=this;
    //基本构造
    this.main_camera;
    this.main_scene;
    this.main_renderer;
    this.main_scene = new THREE.Scene();
    this.main_camera = new THREE.PerspectiveCamera(fov_, w_ / h_, near_, far_);
    this.main_renderer = new THREE.WebGLRenderer({antialias: anitialias,canvas:canvas_});
    this.main_renderer.setSize(w_, h_);
    this.enterframe=function(){};
    this.render=function(){
        requestAnimationFrame(scope.render);
        scope.enterframe();
        scope.main_renderer.render(scope.main_scene, scope.main_camera);
    }
}
