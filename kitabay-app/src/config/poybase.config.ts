import { Polybase } from '@polybase/client';
import { signMessage } from '@wagmi/core';

const db = new Polybase({
  defaultNamespace:
    'pk/0xbaf3185b0b0bd7be972f904b55cc89c1df80057d2ea612a05fa5cbfe3fbad2ac5053724bada19e94bd8848676ad719471100ed8a23371d2c55061baca62b34d0/kitabay',
});

db.signer(async (data: string) => {
  const sig = await signMessage({ message: data });
  return { h: 'eth-personal-sign', sig };
});

export { db };