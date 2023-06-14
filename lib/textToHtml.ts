export default function textToHtml(text) {
    // replace **text** with <b>text</b>
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  
    // replace [name](link) with <a href='link'>name</a>
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, `<a class="text-[#3b82f6]" href='$2'>$1</a>`);

    // replace http://some-link with <a href='http://some-link'>http://some-link</a>
    //text = text.replace(/(https?:\/\/[^\s]+)/g, "<a href='$1'>$1</a>");

    return text;
}