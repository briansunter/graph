import config from './config.json';

function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const emailButtons = document.getElementsByClassName('social-email');

export function encryptEmail(email:string, key:string) {
    return key + window.btoa(email);
}

export function decryptEmail(encryptedEmail:string, key:string) {
    return window.atob(encryptedEmail.replace(key, ''));
}
    
for (const button of emailButtons) {
button?.addEventListener('click', async function handleClick(event) {
  await timeout(50);
  const decryptedEmail = decryptEmail(config.encryptedEmail, config.key);
  window.open(`mailto:${decryptedEmail}`);
});
}