/* お問い合わせ先のメールアドレス。空欄のままではメール作成は実行されません。 */
const contactEmail = 'KodebyKraft@gmail.com';
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); });
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form')?.addEventListener('submit', (event) => { event.preventDefault(); const form = event.currentTarget; const message = document.getElementById('form-message'); if (!form.checkValidity()) { form.reportValidity(); return; } if (!contactEmail || !contactEmail.includes('@')) { message.textContent = 'お問い合わせ先の設定が完了していません。後ほど改めてお試しください。'; return; } const data = new FormData(form); const body = `お名前：${data.get('name')}\n会社名：${data.get('company') || '未記入'}\nメールアドレス：${data.get('email')}\n希望納期：${data.get('deadline') || '未記入'}\n\n依頼内容：\n${data.get('request')}`; window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('Sumi Webへのお問い合わせ')}&body=${encodeURIComponent(body)}`; message.textContent = 'メールソフトを起動しています。内容をご確認のうえ送信してください。'; });
