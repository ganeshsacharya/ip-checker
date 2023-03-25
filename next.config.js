module.exports = {
  async headers() {
    return [
      {
        source: '/api/address',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          }
        ],
      },
    ]
  },
}