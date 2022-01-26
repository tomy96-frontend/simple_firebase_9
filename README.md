# simple_firebase_9
If you are interested in firebase 9, here is some information about it <br>

************************************************************* First Part *************************************************************<br>
1.step
Create dist and src folder <br>
---dist contains an index.html <br>
---src contains an index.js <br>

2.step <br>
--npm init -y  {this comand create package.json}<br>
--npm i webpack webpack-cli -D {this command create package-lock.json and refreshed package.json and adds the nodemodules folder //I added the node_module folder to gitignore because there are too many commits  // }<br>

3.step <br>
--add webpack.config.js ={
    const path = require('path')

    -mode: {we first specify a mode and so i've specified development}, 
    -entry: ./src/index.js {this is the entry file and here I reach index.jst} 
    -ouptput: {this is an object first property of the object is a path and second property of the object filename }

 -watch: { we have a watch property, which monitors and translates changes in real time to bundle.js }       
} <br>

4.step <br>
--Make a custom script  in our packge.json { "build":"webpack" } and then run the <strong> npm run build<storng> command and you will see that the bundle.js will appear inside the dist folder