import 'package:flutter/material.dart';
import "dart:math";
import 'dart:core';
import 'package:url_launcher/url_launcher.dart';
import 'package:http/http.dart';

void main() {
  runApp(Sumo());
}

class Sumo extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sumo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.green,
      ),
      initialRoute: MyHomePage.route,
      routes: {
        MyHomePage.route: (context) => MyHomePage(title: 'Sumo needs food!'),
        PlayPage.route: (context) => PlayPage(title: 'Do something!'),
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  static const String route = '/';
  MyHomePage({Key? key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String? title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String _food = "";
  var foodTracker = [];
  var _foods = [
    "Nick's Grill",
    "Mi Tierra",
    "La Corona Mexican",
    "burritos",
    "Hokkaido Ramen Santouka",
    "Shake Shack",
    "Pho Ready",
    "Pagliacci",
    "Box Eatery",
    "Ezell's",
    "Taco Time",
    "Costco",
    "teriyaki",
    "sushi",
    "ramen",
    "Woodinville Ramen",
    "sandwiches",
    "Homegrown",
    "pizza",
    "burgers",
    "steak and rice",
    "chicken and rice",
    "eggs",
    "tacos!",
    "Chinese",
    "Italian",
    "Padria",
    "hot dogs",
    "stir-fry",
    "Shake and Go",
    "Chick Fil A",
    "thai",
    "Indian food",
    "tikka masala",
    "new food",
    "fish n chips",
    "pasta primavera",
    "chicken parm",
    "gyro",
    "apple sauce",
    "noodles",
    "Panda Express",
    "salmon",
  ];
  String url = "";

  void _findFood() async {
    url = 'https://google.com/search?q=$_food';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  void _getHolidays() async {
    url = 'https://www.checkiday.com/';

    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  void _getVerse() async {
    url = 'https://beta.ourmanna.com/api/v1/get/?format=text&order=random';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
      _food = _foods[Random().nextInt(_foods.length)];
      foodTracker.add(_food);
    });
  }

  void _decrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      if (_counter > 1) {
        foodTracker.removeLast();
        _counter--;
        _food = foodTracker[(_counter - 1)];
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        appBar: AppBar(
          // Here we take the value from the MyHomePage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text(widget.title!),
        ),
        body: Center(
          // Center is a layout widget. It takes a single child and positions it
          // in the middle of the parent.
          child: Column(
            // Column is also a layout widget. It takes a list of children and
            // arranges them vertically. By default, it sizes itself to fit its
            // children horizontally, and tries to be as tall as its parent.
            //
            // Invoke "debug painting" (press "p" in the console, choose the
            // "Toggle Debug Paint" action from the Flutter Inspector in Android
            // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
            // to see the wireframe for each widget.
            //
            // Column has various properties to control how it sizes itself and
            // how it positions its children. Here we use mainAxisAlignment to
            // center the children vertically; the main axis here is the vertical
            // axis because Columns are vertical (the cross axis would be
            // horizontal).
            children: <Widget>[
              Padding(
                padding: EdgeInsets.all(30),
                child: Text(
                  _food != "" ? 'Eat some $_food' : 'Eat Something!',
                  style: Theme.of(context).textTheme.headline4,
                  textAlign: TextAlign.center,
                ),
              ),
              GestureDetector(
                onTap: _incrementCounter,
                child: Image(
                    image: AssetImage('images/il_340x270.526781863_4j86.jpg')),
              ),
            ],
          ),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        floatingActionButton: Stack(
          children: [
            Padding(
              padding: EdgeInsets.only(left: 15),
              child: Align(
                alignment: Alignment.bottomLeft,
                child: FloatingActionButton(
                  onPressed: _decrementCounter,
                  child: Icon(Icons.arrow_back),
                ),
              ),
            ),
            // Padding(
            //   padding: EdgeInsets.only(left: 85),
            //   child: Align(
            //     alignment: Alignment.bottomLeft,
            //     child: FloatingActionButton(
            //       onPressed: _incrementCounter,
            //       child: Icon(Icons.refresh),
            //     ),
            //   ),
            // ),
            Align(
              alignment: Alignment.bottomCenter,
              child: FloatingActionButton(
                onPressed: _incrementCounter,
                child: Icon(Icons.refresh),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(right: 15),
              child: Align(
                alignment: Alignment.bottomRight,
                child: FloatingActionButton(
                  onPressed: _findFood,
                  child: Icon(Icons.search),
                ),
              ),
            ),
            // Padding(
            //   padding: EdgeInsets.only(right: 85),
            //   child: Align(
            //     alignment: Alignment.bottomRight,
            //     child: FloatingActionButton(
            //       onPressed: _getHolidays,
            //       child: Icon(Icons.calendar_today),
            //     ),
            //   ),
            // ),
            Padding(
              padding: EdgeInsets.only(right: 85),
              child: Align(
                alignment: Alignment.bottomRight,
                child: FloatingActionButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                PlayPage(title: "Do Something!")));
                  },
                  child: Icon(Icons.sports),
                ),
              ),
            ),
          ],
        ));
  }
}

class PlayPage extends StatefulWidget {
  static const String route = '/play';
  PlayPage({Key? key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String? title;

  @override
  _PlayPageState createState() => _PlayPageState();
}

class _PlayPageState extends State<PlayPage> {
  int _counter = 0;
  String _activity = "";
  var _activityTracker = [];
  var _activities = [
    "Play basketball",
    "Make a video",
    "Play outside",
    "Do some coloring",
    "Ride bikes",
    "Go for a walk",
    "Go to the track",
    "Play with the air fort",
    "Play with slime",
    "Play toss the dounts",
    "Make a fire",
    "Play Roblox",
    "Play Wii",
    "Play with jump rope",
    "Go to park",
    "Play with cards",
    "Read some books",
    "Pester your parents",
    "Picnic outside",
  ];
  String url = "";

  @override
  void initState() {
    _incrementCounter();
  }

  void _getHolidays() async {
    url = 'https://www.checkiday.com/';

    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
      _activity = _activities[Random().nextInt(_activities.length)];
      _activityTracker.add(_activity);
    });
  }

  void _decrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      if (_counter > 1) {
        _activityTracker.removeLast();
        _counter--;
        _activity = _activityTracker[(_counter - 1)];
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        appBar: AppBar(
          // Here we take the value from the PlayPage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text(widget.title!),
        ),
        body: Center(
          // Center is a layout widget. It takes a single child and positions it
          // in the middle of the parent.
          child: Column(
            // Column is also a layout widget. It takes a list of children and
            // arranges them vertically. By default, it sizes itself to fit its
            // children horizontally, and tries to be as tall as its parent.
            //
            // Invoke "debug painting" (press "p" in the console, choose the
            // "Toggle Debug Paint" action from the Flutter Inspector in Android
            // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
            // to see the wireframe for each widget.
            //
            // Column has various properties to control how it sizes itself and
            // how it positions its children. Here we use mainAxisAlignment to
            // center the children vertically; the main axis here is the vertical
            // axis because Columns are vertical (the cross axis would be
            // horizontal).
            children: <Widget>[
              Padding(
                padding: EdgeInsets.all(30),
                child: Text(
                  _activity != "" ? '$_activity' : "Do Something!",
                  style: Theme.of(context).textTheme.headline4,
                  textAlign: TextAlign.center,
                ),
              ),
              GestureDetector(
                onTap: _incrementCounter,
                child: Image(
                    image: AssetImage('images/il_340x270.526781863_4j86.jpg')),
              ),
            ],
          ),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        floatingActionButton: Stack(
          children: [
            Padding(
              padding: EdgeInsets.only(left: 15),
              child: Align(
                alignment: Alignment.bottomLeft,
                child: FloatingActionButton(
                  onPressed: _decrementCounter,
                  child: Icon(Icons.arrow_back),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(right: 15),
              child: Align(
                alignment: Alignment.bottomRight,
                child: FloatingActionButton(
                  onPressed: _getHolidays,
                  child: Icon(Icons.calendar_today),
                ),
              ),
            ),
            // Padding(
            //   padding: EdgeInsets.only(right: 0),
            //   child: Align(
            //     alignment: Alignment.bottomLeft,
            //     child: FloatingActionButton(
            //       onPressed: _getHolidays,
            //       child: Icon(Icons.calendar_today),
            //     ),
            //   ),
            // ),
            Padding(
              padding: EdgeInsets.only(right: 85),
              child: Align(
                alignment: Alignment.bottomRight,
                child: FloatingActionButton(
                  onPressed: _incrementCounter,
                  child: Icon(Icons.sports),
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: FloatingActionButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Icon(Icons.home),
              ),
            ),
          ],
        ));
  }
}
