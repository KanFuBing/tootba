import Layout from '@/layout'
import wordcloud from '@/lib/wordcloud'
import { useEffect } from 'react'
import * as d3 from 'd3'
import randomColor from '@/lib/random'
import { useTheme } from '@mui/material'

const Wordcloud = ({ content, error, title }) => {
  const mode = useTheme().palette.mode

  useEffect(() => {
    const passage = error ?? content
    const segments = Array.from(new Intl.Segmenter('ja-JP', { granularity: 'word' }).segment(passage)).map((segment) => segment.segment)
    const words = Object.values(segments.reduce((prev, curr) => {
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
    }, {}))
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
      d3.select('#container')
        .html('')
        .append('svg')
        .attr('width', layout.size()[0])
        .attr('height', layout.size()[1])
        .append('g')
        .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', (d) => `${d.size}px`)
        .style('font-family', 'Impact')
        .style('font-weight', 'bold')
        .style('fill', () => randomColor(mode === 'dark' ? 156 : 0, 100))
        .attr('text-anchor', 'middle')
        .attr('transform', (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text((d) => d.text)
    }
  }, [content, error, mode])

  return <Layout noPadding title={title} />
}

export default Wordcloud
