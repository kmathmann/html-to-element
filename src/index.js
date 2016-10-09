let wrapper =  document.createElement('div');

/**
 * Converts HTML from string to js dom element.
 * @returns {object, object[]}
 * @param html
 */
export default function htmlToElement(html) {
    if (!html || typeof html !== 'string') {
        return null;
    }

    wrapper.innerHTML = html;
    return wrapper.childElementCount > 1 ? wrapper.children : wrapper.firstElementChild;
}
