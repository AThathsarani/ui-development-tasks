import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 83, 139, 218),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25.0),
              child: Row(
                children: [
                  Text(
                    'D',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 25),
            Expanded(
              child: Container(
                padding: EdgeInsets.all(25),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(20),
                    topRight: Radius.circular(20),
                  ),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Align(
                      alignment: Alignment.center,
                      child: Column(
                        children: [
                          Icon(
                            Icons.card_giftcard,
                            size: 50,
                            color: Colors.blue,
                          ),
                          SizedBox(height: 10),
                          Text(
                            'Non-Contact Deliveries',
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 30,
                            ),
                            textAlign: TextAlign.center,
                          ),
                          SizedBox(height: 10),
                          Text(
                            'This is a small paragraph explaining the details about non-contact deliveries. It provides additional information to the user.',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 16),
                          ),
                          SizedBox(height: 20),
                          Column(
                            children: [
                              ElevatedButton(
                                onPressed: () {
                                  // Add your onPressed logic here
                                },
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.green, // Background color
                                  padding: EdgeInsets.symmetric(horizontal: 50, vertical: 15),
                                ),
                                child: Text(
                                  'Order Now',
                                  style: TextStyle(color: Colors.white),
                                ),
                              ),
                              SizedBox(height: 10),
                              ElevatedButton(
                                onPressed: () {
                                  // Add your onPressed logic here
                                },
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.white, // Background color
                                  padding: EdgeInsets.symmetric(horizontal: 50, vertical: 15),
                                ),
                                child: Text(
                                  'Dismiss',
                                  style: TextStyle(color: Colors.black),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
