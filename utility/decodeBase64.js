function decodeBase64(data) {
  const [_, base64] = data.split(",");

  if (typeof atob === "undefined") {
    const str = Buffer.from(base64, "base64").toString();
    return JSON.parse(str);
  }
  return atob(base64);
}

export default decodeBase64;
