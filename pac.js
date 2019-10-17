function FindProxyForURL(url, host) {
  if (convert_addr(dnsResolve(host)) != 3627732782) return "DIRECT";

  // All other requests go through port 8080 of proxy.example.com.
  // should that fail to respond, go directly to the WWW:
  return "PROXY 172.25.102.17:9999; DIRECT";
}
