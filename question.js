'use strict';

class Question {
  constructor(content) {
    this.content = content;
    this.save();
    console.log(this);
  }

  static All(){
    return this._All;
  }

  save() {
    this.constructor._All.push(this);
  }

  static Find(id) {
    return this._All[id-1];
  }

}
Question._All = [];
