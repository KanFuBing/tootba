import Layout from '@/layout'
import wordcloud from '@/lib/wordcloud'
import { useEffect, useState } from 'react'
import * as d3 from 'd3'

const Wordcloud = ({ content, error, title }) => {
  const [words, setWords] = useState([{ text: 'しばらく', size: 30, color: 'yellow' }, { text: 'お待ち', size: 100 }, { text: 'ください', size: 60 }, { text: '...', size: 50 }])
  useEffect(() => {
    const passage = error ?? content
    const segments = Array.from(new Intl.Segmenter('ja-JP', { granularity: 'word' }).segment(passage)).map((segment) => segment.segment)
    setWords(Object.values(segments.reduce((prev, curr) => {
      // filter kanas, numbers, marks
      if (error || !curr.match(/^[ぁ-んー　.,:!@#$%^&*?=…ー―‐\p\n…\(\)\[\]－/\t‘’。、，？！：“”「」『』【】（）《》＾＃＆％＄＠＝*的是了]|[(you)(he)(the)(she)(it)(a)(of)(on)(to)(in)(be)(is)(was)(are)(were)(am)]$/)) {
        if (prev[curr]) {
          prev[curr].size += prev[curr].size > 80 ? 1 : 15
        }
        else {
          prev[curr] = { text: curr, size: error ? 50 : 12 }
        }
      }
      return prev
    }, {})))
  }, [error, content])

  useEffect(() => {
    const layout = wordcloud()
      .size([innerWidth * 0.8, 500])
      .words(words)
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .font('Impact')
      .fontSize((d) => d.size)
      .on('end', draw)
    layout.start()
    function draw(words) {
      document.getElementById('container').textContent = ''
      d3.select('#container').append('svg')
        .attr('width', layout.size()[0])
        .attr('height', layout.size()[1])
        .append('g')
        .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
        .selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', (d) => `${d.size}px`)
        .style('font-family', 'Impact')
        .style('font-weight', 'bold')
        .style('fill', () => `rgb(${Math.floor(Math.random() * (error ? 256 : 120))},${Math.floor(Math.random() * 120)},${Math.floor(Math.random() * 120)})`)
        .attr('text-anchor', 'middle')
        .attr('transform', (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text((d) => d.text).enter()
    }
  }, [error, words])

  return <Layout noPadding title={title} />
}

export default Wordcloud
