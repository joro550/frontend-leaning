import { CommentComponent } from "./CommentComponent";
import { DataLoader } from "./loader/dataLoader";
import { ReplyComponent } from "./ReplyComponent";

function App() {
  var dataLoader = new DataLoader();

  var data = dataLoader.loadFile();

  return (
    <div className="flex bg-gray-200 min-w-screen min-h-screen">
      <div className="mx-auto">
        {data.comments.map(c => {
            return <CommentComponent 
                      key={c.id} 
                      comment={c}  
                      currentUser={data.currentUser}  
                    />
        })}

        <ReplyComponent user={data.currentUser} />
      </div>
    </div>
  );
}

export default App;
