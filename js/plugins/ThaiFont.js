//=============================================================================
// Thai Font
//=============================================================================
/*:
 * @target MV
 * @plugindesc ปรับตัวอักษรภาษาไทย
 * License: TIN5451
 * @author TIN5451
 *
 * @help ThaiFont.js
 *
 * ปลั๊กอินนี้จะปรับตัวอักษรภาษาไทยไม่ให้สระลอย
 * การแสดงผลจะตรงกับที่แสดงในหน้าจอเริ่มเกมและเมนูต่างๆ 
 * 
 * 
 * @param Font File
 * @desc Input the file name of the Font in /fonts/ that will be Font.
 * @default th_krub-webfont.ttf
 *
 * @param Font Name
 * @desc The name that appears in the Options Window for Font.
 * @default th_krub-webfont
 */


(function(){
    "use strict";

    const params = PluginManager.parameters('ThaiFont');
    var name = String(params['Font Name']);
    var file = String(params['Font File']);
    Graphics.loadFont(name, 'fonts/' + file);

    var _Window_Base_resetFontSettings = Window_Base.prototype.resetFontSettings;
    Window_Base.prototype.resetFontSettings = function() {
        _Window_Base_resetFontSettings.apply(this);
        this.loadOptionsFont();
    };

    Window_Base.prototype.loadOptionsFont = function() {
        this.contents.fontFace = name;
    };

    var _convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function(text) {
        //Thai Language Fixer by Mikichan
        //Version 18.03.14.5
        _convertEscapeCharacters.call(this,text);
        text = text.replace(/ั่/g, "ั");
        text = text.replace(/ั้/g, "ั");
        text = text.replace(/ั๊/g, "ั");
        text = text.replace(/ั๋/g, "ั");
        text = text.replace(/ั์/g, "ั");
        text = text.replace(/ิ่/g, "ิ");
        text = text.replace(/ิ้/g, "ิ");
        text = text.replace(/ิ๊/g, "ิ");
        text = text.replace(/ิ๋/g, "ิ");
        text = text.replace(/ิ์/g, "ิ");
        text = text.replace(/ี่/g, "ี");
        text = text.replace(/ี้/g, "ี");
        text = text.replace(/ี๊/g, "ี");
        text = text.replace(/ี๋/g, "ี");
        text = text.replace(/ี์/g, "ี");
        text = text.replace(/ึ่/g, "ึ");
        text = text.replace(/ึ้/g, "ึ");
        text = text.replace(/ึ๊/g, "ึ");
        text = text.replace(/ึ๋/g, "ึ");
        text = text.replace(/ึ์/g, "ึ");
        text = text.replace(/ื่/g, "ื");
        text = text.replace(/ื้/g, "ื");
        text = text.replace(/ื๊/g, "ื");
        text = text.replace(/ื๋/g, "ื");
        text = text.replace(/ื์/g, "ื");
        text = text.replace(/ํ่/g, "ํ");
        text = text.replace(/ํ้/g, "ํ");
        text = text.replace(/ํ๊/g, "ํ");
        text = text.replace(/ํ๋/g, "ํ");
        text = text.replace(/ํ์/g, "ํ");
        text = text.replace(/่ำ/g, "ำ");
        text = text.replace(/้ำ/g, "ำ");
        text = text.replace(/๊ำ/g, "ำ");
        text = text.replace(/๋ำ/g, "ำ");
        text = text.replace(/ญุ/g, "ุ");
        text = text.replace(/ฐุ/g, "ุ");
        text = text.replace(/ญู/g, "ู");
        text = text.replace(/ฐู/g, "ู");
        text = text.replace(/ปั/g, "ป");
        text = text.replace(/ปิ/g, "ป");
        text = text.replace(/ปี/g, "ป");
        text = text.replace(/ปึ/g, "ป");
        text = text.replace(/ปื/g, "ป");
        text = text.replace(/ป็/g, "ป");
        text = text.replace(/ปํ/g, "ป");
        text = text.replace(/ป่/g, "ป");
        text = text.replace(/ป้/g, "ป");
        text = text.replace(/ป๊/g, "ป");
        text = text.replace(/ป๋/g, "ป");
        text = text.replace(/ป์/g, "ป");
        text = text.replace(/ฝั/g, "ฝ");
        text = text.replace(/ฝิ/g, "ฝ");
        text = text.replace(/ฝี/g, "ฝ");
        text = text.replace(/ฝึ/g, "ฝ");
        text = text.replace(/ฝื/g, "ฝ");
        text = text.replace(/ฝ็/g, "ฝ");
        text = text.replace(/ฝํ/g, "ฝ");
        text = text.replace(/ฝ่/g, "ฝ");
        text = text.replace(/ฝ้/g, "ฝ");
        text = text.replace(/ฝ๊/g, "ฝ");
        text = text.replace(/ฝ๋/g, "ฝ");
        text = text.replace(/ฝ์/g, "ฝ");
        text = text.replace(/ฟั/g, "ฟ");
        text = text.replace(/ฟิ/g, "ฟ");
        text = text.replace(/ฟี/g, "ฟ");
        text = text.replace(/ฟึ/g, "ฟ");
        text = text.replace(/ฟื/g, "ฟ");
        text = text.replace(/ฟ็/g, "ฟ");
        text = text.replace(/ฟํ/g, "ฟ");
        text = text.replace(/ฟ่/g, "ฟ");
        text = text.replace(/ฟ้/g, "ฟ");
        text = text.replace(/ฟ๊/g, "ฟ");
        text = text.replace(/ฟ๋/g, "ฟ");
        text = text.replace(/ฟ์/g, "ฟ");
        
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
           return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
           return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
           return this.actorName(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
           return this.partyMemberName(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
        return text;
       };
})();
