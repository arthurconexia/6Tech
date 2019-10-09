import 'dart:ui';

class HexColor extends Color {

  HexColor(int color) : super(color);

  static Color _fromHex (String hex) {
    if (hex.startsWith("#")) hex = hex.substring(1);
    int len = hex.length;
    if (len == 8) hex = hex.substring(6) + hex.substring(0, 6);
    int int16 = int.parse(hex, radix: 16);
    if (len == 6) int16 = int16 + 0xFF000000;
    return new Color(int16);
  }

  static Color fromHex(String hex) {
    return _fromHex(hex);
  }

}
