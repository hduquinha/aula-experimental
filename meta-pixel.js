/**
 * Pixel da Meta nas páginas de inscrição do Workshop.
 *
 * Por que existe: a landing (www.escolavozup.com) já avisa a Meta quando alguém
 * preenche o formulário — quem dispara lá é o GTM (GTM-MWVSCMS2), e por isso
 * não se acha `fbq('track','Lead')` no código dela. Estas páginas, porém, não
 * tinham rastreio nenhum além do Clarity: a Meta via o CADASTRO e nunca via o
 * AGENDAMENTO, que é o que a escola vende. O algoritmo otimizava para o que
 * enxergava (cadastro barato) e ficava cego para quem de fato agenda.
 *
 * O evento é `Schedule`, que é o padrão da Meta para marcação de compromisso.
 *
 * `eventID` é obrigatório na chamada: o mesmo id vai no corpo do formulário e o
 * servidor reenvia o evento pela Conversions API com ele (ver
 * `sendMetaScheduleEvent` em api/inscricao.js). Sem esse id a mesma inscrição
 * contaria duas vezes — foi exatamente o que aconteceu na landing quando se
 * disparou fbq e GTM juntos.
 *
 * O id do pixel é público (já aparece no HTML da landing), então fica aqui
 * mesmo em vez de virar variável de ambiente, que não existe em página estática.
 */
(function () {
  var PIXEL_ID = '1321351659702121';

  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  try {
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  } catch (e) {
    /* pixel bloqueado por extensão do navegador — a página segue normal */
  }

  /**
   * Avisa a Meta que esta pessoa AGENDOU. Chamada pela página só depois de o
   * servidor confirmar a inscrição: evento disparado antes da confirmação
   * contaria agendamento que não existe.
   */
  window.vozupTrackAgendamento = function (eventId, evento) {
    try {
      if (typeof window.fbq !== 'function') return;
      window.fbq('track', 'Schedule', {
        content_name: evento || 'Workshop VozUP',
        content_category: 'Workshop'
      }, eventId ? { eventID: eventId } : undefined);
    } catch (e) {
      /* nunca quebrar a confirmação de inscrição por causa de rastreio */
    }
  };
})();
