describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG " para "ABCDEFGHIJKLMNOPQRSTUVWXYZ " con offest 33',()=>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG ")
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg " para "abcdefghijklmnopqrstuvwxyz " con offset 33',()=>{
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz ",33),"hijklmnopqrstuvwxyzabcdefg ")
    });
    it('debería retornar "ñ123" para "ñ123" con offset 33',()=>{
      assert.equal(cipher.encode("ñ123",33),"ñ123")
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ " para "HIJKLMNOPQRSTUVWXYZABCDEFG " con offest 33',()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG ",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ ")
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz " para "hijklmnopqrstuvwxyzabcdefg " con offset 33',()=>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg ",33),"abcdefghijklmnopqrstuvwxyz ")
    });
    it('debería retornar "ñ123" para "ñ123" con offset 33',()=>{
      assert.equal(cipher.decode("ñ123",33),"ñ123")
    });
  });

 /* describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });*/

});
