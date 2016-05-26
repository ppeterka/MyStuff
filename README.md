#MyStuff: small inventory for electronic parts (Node-Electron-JS self-learning project)

Ok, so this little thing here is a standard run-of-the-mill learning project: A minimal CRUD app backed with a basic DB. And this happens to fulfill my needs for a basic inventory app to categorize my electronic parts for my hobby projects.

Really, nothing special.

Also the code is *ahem...* "not of highest quality" - I'm still learning the proper ways around these tools.

##Features

* Well, it works :)
* Couldn't be easier to use...
* Regex in filter field
* Search is *quick* - thanks to SlickGrid

##Known limitations
* NeDB is known not to hold more than 256MB of data

## How to run it?
As this is not a proper app yet (hope I'll be able to get it to that stage), running it is not user friendly...

### Prerequisites
* Node.js
* If on Windows: MS Visual C++ 2015 Redistributable (otherwise electron won't do anything, just not run!)

###Starting:
**Before first run:**

    npm install

**Then to start it:**

    npm start


## Technical Details

###Used libraries:

* [Electron](https://github.com/electron/electron)
* [NeDB](https://github.com/louischatriot/nedb)
* [SlickGrid, 6pac fork](https://github.com/6pac/SlickGrid) ( [original by mleibman](https://github.com/mleibman/SlickGrid) )
* [Bootstrap v4 alpha](http://v4-alpha.getbootstrap.com/)


##TODOs

* [Always use line ending semicolons](http://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript)
* Proper I18N - currently the labels are in Hungarian (sorry)...
* Use NPM modules properly for SlickGrid and Bootstrap
* DELETE function
* Investigate why a "full" row needs to be inserted to NeDB - updating with new field does not work for some reason...
* *Drink a coffee. No, really, I shouldn't: it is way too **latte** *
