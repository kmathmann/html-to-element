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

    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)))
    {
        wrapper =  document.createElement('div');
    }

    wrapper.innerHTML = html;
    return wrapper.childElementCount > 1 ? wrapper.children : wrapper.firstElementChild;
}
