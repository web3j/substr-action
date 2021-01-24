# Substr Javascript action

The `substr` method extracts parts of a string, beginning at the character at the specified position, and returns the specified characters.

**Tip:** To extract characters from the end of the string, use a negative start number.

## Inputs

### `value`

**Required** What to substring.

### `start`

**Required** The position where to start the extraction. First character is at index 0.

 - If `start` is positive and greater than, or equal, to the length of the string, `substr()` returns an empty string.
 - If `start` is negative, `substr()` uses it as a character index from the end of the string.
 - If `start` is negative or larger than the length of the string, `start` is set to 0.

### `length`

The number of characters to extract. If omitted, it extracts the rest of the string.

## Outputs

### `result`

A new String, containing the extracted part of the text. If length is 0 or negative, an empty string is returned.

## Example usage

```yaml
uses: web3j/substr-action@v2
with:
  value: 'Mona the Octocat'
  start: '9'
```

Result: `Octocat`

