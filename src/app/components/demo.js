import Draggable from "react-draggable";

export default function Demo() {
  return (
    <main>
      <Draggable
        axis="both" //controlles the axis the div can travel excepts x,y,both and none
        handle="handle" // a classname type property that is passed to an element to control the area it can be moved from
        bounds="main" //sets the bounderies that the draggable can be moved within will except component, parent or set pixels for {{left, top, right, bottom}} left and top are - figures as this is transform from loading possition.
        grid={[50, 50]} //step size the of a single movment in pixels
        //draggable also has listeners that can activate functions
        //  onStart={}
        //  onStop={}
        //  onDrag={}
        //  onMouseDown={}
      >
        <handle>I am the handle </handle>
        <div>I am a draggable div </div>
      </Draggable>
    </main>
  );
}
