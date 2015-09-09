describe('palindrome', function() {
  it("returns false for the words 'Hello'", function() {
    expect(palindrome('Hello')).to.equal(false);
  });

  it("returns true for the words 'Radar'", function() {
    expect(palindrome('Radar')).to.equal(true);
  });

  it("returns true for the words 'Hello olleH'", function() {
    expect(palindrome('Hello olleH')).to.equal(true);
  });

  it("returns true for the words '1 radar 1'", function() {
    expect(palindrome('1 radar 1')).to.equal(true);
  });

  it("returns true for the number 121", function() {
    expect(palindrome(121)).to.equal(true);
  });
});
