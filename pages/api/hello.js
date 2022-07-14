// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      'sambutan1': 'Hai, mau tau data yang mendukung pembuatan situs ini? Tidak semuanya terbuka ya.',
      'sambutan2': 'Path "hello" berisi data-data yang boleh dibaca dan digunakan oleh siapapun.',
      'sambutan3': 'Jangan cari data yang lain ya. Data lain hanya dipakai untuk keperluan internal.',
      'data':{
        'name': 'John Doe'
      }
    }
  )
}
