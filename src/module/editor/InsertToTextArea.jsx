const InsertToTextArea = (insertString, currentMarkdown = "") => {

  const pos = currentMarkdown.length;
  const front = currentMarkdown.slice(0, pos);
  const back = currentMarkdown.slice(pos);

  const sentence = front + insertString + back;

  return sentence;
};

export default InsertToTextArea;