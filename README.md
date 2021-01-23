

# Substring Javascript action

The `substring` method extracts the characters from a string, between two specified indices, and returns the new sub string.

This method extracts the characters in a string between `start` and `end`, not including `end` itself.

If `start` is greater than `end`, this method will swap the two arguments, meaning `str.substring(1, 4) == str.substring(4, 1)`.

If either `start` or `end` is less than `0`, it is treated as if it were `0`.

## Inputs

### `value`

**Required** What to substring.

## Outputs

### `start`

**Required** The start position.

### `end`

The end position. The `value` string length by default.

## Example usage

```yaml
uses: web3j/substring-action@v1.0
with:
  who-to-greet: 'Mona the Octocat'
```
