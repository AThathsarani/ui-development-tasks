import 'package:delivery_app_ui/pages/home_page.dart';
import 'package:flutter/material.dart';


void main() {
  runApp(DeliveryApp());
}

class DeliveryApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
           home:HomePage(),
    );
  }
}