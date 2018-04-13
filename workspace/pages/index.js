${partials_header}

${posts.map(i => `
  <article>
    <header>
      <h2><a href="/post/${i.fields.slug}">${i.fields.title}</a></h2>
      <p>
        By <strong>${i.fields.author[0].fields.name}</strong> on ${date(i.sys.createdAt, 'MMMM Do, YYYY')}
        </time>
      </p>
    </header>

    ${params.slug ? markdown(i.fields.body) : truncate(markdown(i.fields.body), 250)}
  </article>
`).join('')}


<div class="pagination">
  ${postsMeta.skip > 0 && (postsMeta.skip - postsMeta.limit) !== 0 ? `<a class="pagination--prev" href="?skip=${postsMeta.skip - postsMeta.limit}">&larr; Prev</a>` : ''}

  ${(postsMeta.skip - postsMeta.limit) === 0 ? `
    <a class="pagination--prev" href="/">&larr; Prev</a>
  ` : ''}
  
  ${postsMeta.total > (postsMeta.limit + postsMeta.skip) ? `
  <a class="pagination--next" href="?skip=${(Number(params.skip) || 0) + postsMeta.limit}">Next &rarr;</a>
  ` : ''}
</div>

${partials_footer}