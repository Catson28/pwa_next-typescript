# Plug-in [Zero Config PWA](https://web.dev/learn/pwa/) para [Next.js](https://nextjs.org/)



Este plugin é alimentado por [workbox](https://developer.chrome.com/docs/workbox/) e outras coisas boas.

[![tamanho](https://camo.githubusercontent.com/ef1d95d8ba2a6ac6f94440e9abd41bce81b206d7d4e4da8f515a5e1e019d08ba/68747470733a2f2f696d672e736869656c64732e696f2f62756e646c6570686f6269612f6d696e7a69702f6e6578742d7077612e737667)](https://camo.githubusercontent.com/ef1d95d8ba2a6ac6f94440e9abd41bce81b206d7d4e4da8f515a5e1e019d08ba/68747470733a2f2f696d672e736869656c64732e696f2f62756e646c6570686f6269612f6d696e7a69702f6e6578742d7077612e737667) [![Dependências](https://camo.githubusercontent.com/59c5244e1cb9065864a1f7bf9f3034b32def9626735f2f6c0e6fc8ff65cb566c/68747470733a2f2f696d672e736869656c64732e696f2f6c6962726172696573696f2f72656c656173652f6e706d2f6e6578742d707761)](https://camo.githubusercontent.com/59c5244e1cb9065864a1f7bf9f3034b32def9626735f2f6c0e6fc8ff65cb566c/68747470733a2f2f696d672e736869656c64732e696f2f6c6962726172696573696f2f72656c656173652f6e706d2f6e6578742d707761) [![Downloads](https://camo.githubusercontent.com/341dc10847489bf90781ecd19df5f6cb1c914b55686aa9b2f8ef0a3c4c45a45d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64772f6e6578742d7077612e737667)](https://camo.githubusercontent.com/341dc10847489bf90781ecd19df5f6cb1c914b55686aa9b2f8ef0a3c4c45a45d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64772f6e6578742d7077612e737667) [![licença](https://camo.githubusercontent.com/bfb82cb85a1939bb5db8d9ceca56cc9a491fa252df36fc4e1a5a2ab534fb0abf/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e6578742d7077612e737667)](https://camo.githubusercontent.com/bfb82cb85a1939bb5db8d9ceca56cc9a491fa252df36fc4e1a5a2ab534fb0abf/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e6578742d7077612e737667)

👋 Compartilhe seu incrível projeto 👉 PWA [aqui](https://github.com/shadowwalker/next-pwa/discussions/206)

**Características**

- 0️⃣ Configuração zero para registrar e gerar service worker
- ✨ Pré-cache otimizado e cache de tempo de execução
- 💯 Maximize a pontuação do farol
- 🎈 Exemplos fáceis de entender
- 📴 Suporte totalmente offline com [exemplo](https://github.com/shadowwalker/next-pwa/tree/master/examples/offline-fallback-v2) 🆕 de fallbacks
- 📦 Usar [workbox](https://developer.chrome.com/docs/workbox/) e [workbox-window](https://developer.chrome.com/docs/workbox/modules/workbox-window) v6
- 🍪 Trabalhe com cookies prontos para uso
- 🔉 Solicitações de intervalo padrão para áudios e vídeos
- ☕ Nenhum servidor personalizado necessário para Next.js [exemplo](https://github.com/shadowwalker/next-pwa/tree/master/examples/next-9) 9+
- 🔧 Exemplo de aceitação de eventos de ciclo de vida do PWA
- 📐 Trabalho personalizado para executar código extra com divisão de código e [exemplo](https://github.com/shadowwalker/next-pwa/tree/master/examples/custom-ts-worker) de suporte **a texto datilografado**
- 📜 [Variáveis de ambiente público](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser) disponíveis no trabalho personalizado como de costume
- 🐞 Depurar service worker com confiança no modo de desenvolvimento sem cache
- 🌏 Internacionalização (também conhecida como I18N) com [exemplo](https://github.com/shadowwalker/next-pwa/tree/master/examples/next-i18next)`next-i18next`
- 🛠 Configurável pelas mesmas [opções de configuração da caixa de trabalho](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin) para [GenerateSW](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#generatesw-plugin) e [InjectManifest](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#injectmanifest-plugin)
- 🚀 Gire um [GitPod](https://gitpod.io/#https://github.com/shadowwalker/next-pwa/) e experimente exemplos na velocidade do foguete
- ⚡ Suporte [blitz.js](https://blitzjs.com/) (basta adicionar a `blitz.config.js`)
- 🔩 Pré-armazenamento em cache (experimental) quando definido como `.module.js``next.config.js``experimental.modern``true`

> **NOTA 1** - a versão 2.0.0+ deve funcionar apenas com 9.1+, e os arquivos estáticos só devem ser servidos por meio do diretório. Isso tornará as coisas mais simples.`next-pwa``next.js``public`
>
> **NOTA 2** - Se você encontrar um erro durante a compilação, [considere atualizar para webpack5 em `next.config.js`](https://github.com/shadowwalker/next-pwa/issues/198#issuecomment-817205700).`TypeError: Cannot read property **'javascript' of undefined**`

------

[![Abrir no Gitpod](https://camo.githubusercontent.com/163efbc102b063a86a5528c4afea79927c350e67f757aecbda9dabfeca87936c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4f70656e253230496e2d476974706f642e696f2d2532333139363644323f7374796c653d666f722d7468652d6261646765266c6f676f3d676974706f64)](https://gitpod.io/#https://github.com/shadowwalker/next-pwa/)

## Instalar



> Se você é novo ou não conhece, talvez queira primeiro [fazer o checkout para aprender next.js](https://nextjs.org/learn/basics/create-nextjs-app) ou [next.js documento](https://nextjs.org/docs/getting-started). Em seguida, comece com [um exemplo simples](https://github.com/shadowwalker/next-pwa/tree/master/examples/next-9) ou um [exemplo de aplicativo da web progressivo em next.js repositório](https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app).`next.js``react.js`

```
yarn add next-pwa
```



## Uso básico



### Passo 1: com PWA



Atualizar ou criar com`next.config.js`



Explain



```
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})
```



Depois de executar , isso gerará dois arquivos em seu : e , que serão automaticamente servidos estaticamente.`next build``public``workbox-*.js``sw.js`

Se você estiver usando Next.js versão 9 ou mais recente, pule as opções abaixo e vá para a Etapa 2.

Se você estiver usando Next.js anterior à versão 9, precisará escolher uma opção abaixo antes de continuar para a Etapa 2.

### Opção 1: hospedar arquivos estáticos



Copie os arquivos para o servidor de hospedagem de arquivos estáticos, para que eles possam ser acessados a partir dos seguintes caminhos: e .`https://yourdomain.com/sw.js``https://yourdomain.com/workbox-*.js`

Um exemplo é usar o serviço de hospedagem Firebase para hospedar esses arquivos estaticamente. Você pode automatizar a etapa de cópia usando scripts em seu fluxo de trabalho de implantação.

> Por motivos de segurança, você precisa hospedar esses arquivos diretamente do seu domínio. Se o conteúdo for entregue usando um redirecionamento, o navegador se recusará a executar o service worker.

### Opção 2: usar servidor personalizado



Quando uma solicitação HTTP for recebida, teste se esses arquivos são solicitados e retorne esses arquivos estáticos.

Exemplo `server.js`



Explain



```
const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname === '/sw.js' || /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)) {
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, () => {
    console.log(`> Ready on http://localhost:${3000}`)
  })
})
```



> A configuração a seguir não tem nada a ver com o plug-in e você provavelmente já os configurou. Se não, vá em frente e configure-os.`next-pwa`

### Etapa 2: Adicionar arquivo de manifesto (exemplo)



Crie um arquivo em sua pasta:`manifest.json``public`



Explain



```
{
  "name": "PWA App",
  "short_name": "App",
  "icons": [
    {
      "src": "/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/android-chrome-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait"
}
```



### Etapa 3: adicionar meta de cabeça (exemplo)



Adicione o seguinte em ou , em :`_document.jsx``_app.tsx``<Head>`



Explain



```
<meta name="application-name" content="PWA App" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="PWA App" />
<meta name="description" content="Best PWA App in the world" />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#2B5797" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="theme-color" content="#000000" />

<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/manifest.json" />
<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:url" content="https://yourdomain.com" />
<meta name="twitter:title" content="PWA App" />
<meta name="twitter:description" content="Best PWA App in the world" />
<meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
<meta name="twitter:creator" content="@DavidWShadow" />
<meta property="og:type" content="website" />
<meta property="og:title" content="PWA App" />
<meta property="og:description" content="Best PWA App in the world" />
<meta property="og:site_name" content="PWA App" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />

<!-- apple splash screen images -->
<!--
<link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
-->
```



> Dica: coloque a metatag head em vez de dentro, se necessário.`viewport``_app.js``_document.js`



Explain



```
<meta
  name='viewport'
  content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
/>
```



## Offline Fallbacks



Os fallbacks offline são úteis quando a busca falhou no cache e na rede, um recurso pré-armazenado em cache é servido em vez de apresentar um erro do navegador.

Para começar, basta adicionar uma página como ou ou ou . Então está tudo pronto! Quando o usuário estiver offline, todas as páginas que não estiverem armazenadas em cache retornarão para '/_offline'.`/_offline``pages/_offline.js``pages/_offline.jsx``pages/_offline.ts``pages/_offline.tsx`

**[Use este exemplo para vê-lo em ação](https://github.com/shadowwalker/next-pwa/tree/master/examples/offline-fallback-v2)**

```
next-pwa` ajuda você a pré-armazenar esses recursos em cache no primeiro carregamento e, em seguida, injetar um manipulador de fallback para plug-in em todas as configurações, para que os recursos pré-armazenados em cache sejam atendidos quando a busca falhar.`handlerDidError``runtimeCaching
```

Você também pode configurar sua [entrada de configuração runtimeCaching](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-RuntimeCaching) para implementar uma funcionalidade semelhante. A diferença é que o método acima é baseado no tipo de recurso, este método é baseado no padrão de url correspondente. Se essa configuração for definida na entrada de configuração runtimeCaching, o fallback baseado em tipo de recurso será desabilitado automaticamente para esse padrão de url específico para evitar conflitos.`precacheFallback.fallbackURL`

## Configuração



Existem opções que você pode usar para personalizar o comportamento deste plugin adicionando objeto na próxima configuração em:`pwa``next.config.js`



Explain



```
const withPWA = require('next-pwa')({
  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // next.js config
})
```



### Opções Disponíveis



- Desativar: Booleano - se o recurso PWA deve ser desativado como um todo

  - inadimplência: `false`
  - , para que ele gere service worker em ambos e `disable: false``dev``prod`
  - definido para desativar completamente o PWA`disable: true`
  - Se você não precisar depurar o service worker no , poderá definir `dev``disable: process.env.NODE_ENV === 'development'`

- Register: Boolean - se deve permitir que este plugin registre o service worker para você

  - padrão para `true`
  - Definido como Quando você deseja lidar com o Register Service Worker por conta própria, isso pode ser feito em seu aplicativo raiz. Você pode considerar o [register.js](https://github.com/shadowwalker/next-pwa/blob/master/register.js) como exemplo.`false``componentDidMount`

- Escopo: String - Escopo de URL para PWA

  - padrão: [`basePath`](https://nextjs.org/docs/api-reference/next.config.js/basepath) em ou `next.config.js``/`
  - definido para que o caminho abaixo seja PWA, enquanto outros não`/app``/app`

- sw: string - nome do arquivo de script do service worker

  - inadimplência: `/sw.js`
  - Defina como outro nome de arquivo se quiser personalizar o nome do arquivo de saída

- runtimeCaching - estratégias de cache (array ou função de retorno de chamada)

  - padrão: consulte a seção **Cache de tempo de execução** para obter a configuração padrão
  - aceita uma matriz de objetos de entrada de cache, [siga a estrutura aqui](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-RuntimeCaching)
  - Nota: a ordem da matriz é importante. A primeira regra que corresponde é eficaz. Portanto, por favor, **SEMPRE** coloque regras com escopo maior atrás das regras com um escopo menor e específico.

- publicExcludes - uma matriz de strings de padrão glob para excluir arquivos na pasta de serem pré-armazenados em cache. 

  ```
  public
  ```

  - Padrão: - Isso significa que o comportamento padrão armazenará em cache todos os arquivos dentro da pasta, mas os arquivos dentro da pasta. Você pode simplesmente colocar arquivos dentro dessa pasta para não armazená-los em pré-cache sem configurar isso.`['!noprecache/**/*']``public``/public/noprecache`
  - exemplo: `['!img/super-large-image.jpg', '!fonts/not-used-fonts.otf']`

- buildExcludes - uma matriz de padrão ou função extra para excluir arquivos de serem pré-armazenados em cache na pasta (ou em sua compilação personalizada) 

  ```
  .next/static
  ```

  - inadimplência: `[]`
  - exemplo: - Não pré-armazene arquivos em cache (recomendo isso para trabalhar com plugin)`[/chunks\/images\/.*$/]``.next/static/chunks/images``next-optimized-images`
  - doc: Matriz de (string, RegExp ou function()). Um ou mais especificadores usados para excluir ativos do manifesto de pré-cache. Isso é interpretado seguindo as mesmas regras da opção de exclusão padrão do Webpack.

- cacheStartUrl - se o URL inicial do cache deve ser armazenado em cache

  - inadimplência: `true`
  - [Discussão do caso de uso para não armazenar em cache o URL inicial](https://github.com/shadowwalker/next-pwa/pull/296#issuecomment-1094167025)

- dynamicStartUrl - se o URL inicial retornar um documento HTML diferente em um estado diferente (como conectado vs. não conectado), isso deve ser definido como true.

  - inadimplência: `true`
  - efetivo quando definido como `cacheStartUrl``true`
  - recommend: defina como **false** se o seu url inicial sempre retornar o mesmo documento HTML, o url inicial será pré-armazenado em cache, isso ajudará a acelerar o primeiro carregamento.

- dynamicStartUrlRedirect - se a URL inicial redirecionar para outra rota, como , é recomendável configurar essa URL redirecionada para obter a melhor experiência do usuário. 

  ```
  /login
  ```

  - inadimplência: `undefined`
  - efetivo quando definido como `dynamicStartUrlRedirect``true`

- fallbacks - configure rotas pré-armazenadas em cache para fallback quando o cache e a rede não estiverem disponíveis para atender aos recursos.

  - **Se você só precisa de uma página de fallback offline, basta criar uma página `/_offline`, como `Pages/_offline.js` e está tudo pronto, sem necessidade de configuração**

  - inadimplência: 

    ```
    object
    ```

    - `fallbacks.document` - rota de fallback para documento (página), padrão para se você criou essa página`/_offline`
    - `fallbacks.image` - rota de fallback para imagem, padrão para nenhum
    - `fallbacks.audio` - rota de fallback para áudio, padrão para nenhum
    - `fallbacks.video` - rota de fallback para vídeo, padrão para nenhum
    - `fallbacks.font` - rota de fallback para fonte, padrão para nenhum

- cacheOnFrontEndNav - habilite o cache de rota adicional ao navegar entre páginas com o front-end. Confira este [exemplo](https://github.com/shadowwalker/next-pwa/tree/master/examples/cache-on-front-end-nav) para obter algum contexto sobre por que isso é implementado. 

  ```
  next/link
  ```

  - inadimplência: `false`
  - nota: isso melhora a experiência do usuário em casos de uso especiais, mas também adiciona alguma sobrecarga porque chamada de rede adicional, sugiro que você considere isso como uma compensação.

- subdomainPrefix: string - prefixo de url para permitir a hospedagem de arquivos estáticos em um subdomínio

  - ~~padrão: `""` - ou seja, padrão sem prefixo~~
  - ~~Exemplo: `/subdomain` se o aplicativo estiver hospedado em `example.com/subdomain`~~
  - obsoleto, use [basePath](https://nextjs.org/docs/api-reference/next.config.js/basepath) em vez disso

- reloadOnOnline - altera o comportamento do aplicativo quando o dispositivo detecta que ele voltou "online" e tem uma conexão de rede. Indique se o aplicativo deve chamar para atualizar o aplicativo. 

  ```
  location.reload()
  ```

  - inadimplência: `true`

- customWorkerDir - personalize o diretório em que procura uma implementação de trabalhador personalizado para adicionar ao service worker gerado pelo workbox. Para obter mais informações, confira o [exemplo de trabalhador personalizado](https://github.com/shadowwalker/next-pwa/tree/master/examples/custom-ts-worker). 

  ```
  next-pwa
  ```

  - inadimplência: `worker`

### Outras opções



```
next-pwa` uses , outras opções que também podem ser colocadas no objeto podem ser encontradas [**NA DOCUMENTAÇÃO**](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin) para [GenerateSW](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#generatesw-plugin) e [InjectManifest](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#injectmanifest-plugin). Se você especificar , o plugin será usado, caso contrário, será usado para gerar o service worker.`workbox-webpack-plugin``pwa``swSrc``InjectManifest``GenerateSW
```

### Cache de tempo de execução



`next-pwa` usa um [cache.js](https://github.com/shadowwalker/next-pwa/blob/master/cache.js) de tempo de execução padrão

Há uma grande chance de você querer personalizar suas próprias regras de cache de tempo de execução. Sinta-se à vontade para copiar o arquivo padrão e personalizar as regras como desejar. Não se esqueça de injetar as configurações em sua configuração em .`cache.js``pwa``next.config.js`

Aqui está o [documento sobre como escrever configurações de cache de tempo de execução](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-RuntimeCaching), incluindo recursos de sincronização em segundo plano e atualização de transmissão e muito mais!

## Dicas



1. [Padrão comum de UX para solicitar que o usuário recarregue quando um novo service worker é instalado](https://github.com/shadowwalker/next-pwa/blob/master/examples/lifecycle/pages/index.js#L26-L38)

2. Use uma convenção como objeto quando trabalhar no serviço. Para que, no ouvinte, ele possa executar várias tarefas diferentes usando .`{command: 'doSomething', message: ''}``postMessage``if...else...`

3. Quando você estiver depurando o service worker, constantemente para reduzir alguns erros instáveis.`clean application cache`

4. Se você estiver redirecionando o usuário para outra rota, observe que a [caixa de trabalho por padrão apenas armazena em cache a resposta com status HTTP 200](https://developer.chrome.com/docs/workbox/modules/workbox-cacheable-response#what_are_the_defaults), se você realmente deseja armazenar em cache a página redirecionada para a rota, você pode especificá-la como .`runtimeCaching``options.cacheableResponse.statuses=[200,302]`

5. Ao depurar problemas, talvez você queira formatar o arquivo gerado para descobrir o que realmente está acontecendo.`sw.js`

6. Force para gerar a construção de produção da caixa de trabalho por especifique a opção em sua seção de . Embora gere automaticamente a compilação de desenvolvimento da caixa de trabalho durante o desenvolvimento (executando ) e a compilação de produção da caixa de trabalho durante a produção (executando e ). Você ainda pode querer forçá-lo a criar em produção, mesmo durante o desenvolvimento do seu aplicativo Web, pelo seguinte motivo: 

   ```
   next-pwa
   ```

   ```
   mode: 'production'
   ```

   ```
   pwa
   ```

   ```
   next.config.js
   ```

   ```
   next-pwa
   ```

   ```
   next
   ```

   ```
   next build
   ```

   ```
   next start
   ```

   1. Reduzir o ruído de registro em log devido ao build de produção não inclui registro em log.
   2. Melhore um pouco o desempenho devido à compilação de produção ser otimizada e reduzida.

7. Se você deseja apenas desabilitar o registro da caixa de trabalho enquanto mantém a compilação de desenvolvimento durante o desenvolvimento, [basta colocar `self.__WB_DISABLE_DEV_LOGS = true` em seu `worker/index.js` (crie um se você não tiver um).](https://github.com/shadowwalker/next-pwa/blob/c48ef110360d0138ad2dacd82ab96964e3da2daf/examples/custom-worker/worker/index.js#L6)

8. É comum que os desenvolvedores precisem usar string para determinar se os usuários estão usando Safari / iOS / MacOS ou alguma outra plataforma, [a biblioteca ua-parser-js](https://www.npmjs.com/package/ua-parser-js) é uma boa amiga para esse propósito.`userAgent`

## Referência



1. [Caixa de trabalho do Google](https://developer.chrome.com/docs/workbox/what-is-workbox/)
2. [ServiceWorker, MessageChannel e postMessage](https://ponyfoo.com/articles/serviceworker-messagechannel-postmessage) por [Nicolás Bevacqua](https://ponyfoo.com/contributors/ponyfoo)
3. [O ciclo de vida do Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
4. [6 dicas para fazer seu iOS PWA parecer um aplicativo nativo](https://www.netguru.com/codestories/pwa-ios)
5. [Disponibilize seu PWA na Google Play Store](https://www.netguru.com/codestories/make-your-pwa-available-on-google-play-store)

## Projetos divertidos do PWA



1. [Experimente SAMSUNG em um iPhone - deve abrir em um iPhone para iniciar](https://itest.nz/)
2. [App Scope - como uma loja de aplicativos para PWA](https://appsco.pe/)
3. [Diretório PWA](https://pwa-directory.appspot.com/)
4. [PWA Builder - Maneira alternativa de construir PWA incrível](https://www.pwabuilder.com/)

## Licença



MIT