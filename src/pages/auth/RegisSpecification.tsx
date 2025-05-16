import { specificationService } from '@/shared/services/specificationArray';

import { useEffect, useState } from 'react';
import Block from './ui/BlockArrow';

import styles from './auth.module.scss';
import { ICategorySpecification } from '@/shared/types/specification.types';
import ComeBack from '@/shared/UI/come-back';

interface IRegisSpecification {
    onClose: () => void;
    onChangeSpecification: (indexSpecification: string) => void;
    onChangePosition: (indexSpecification: string) => void;
}

const RegisSpecification = ({ onClose, onChangePosition, onChangeSpecification }: IRegisSpecification) => {
    const [data, setData] = useState<ICategorySpecification>();
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<{
        indexCategory: number | null;
        indexPosition: number | null;
        indexSpecification: number | null;
    }>({
        indexCategory: null,
        indexSpecification: null,
        indexPosition: null,
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await specificationService.getAll();
                setData(response);
            } catch (err) {
                console.error('Ошибка при получении данных:', err);
            }
        })();
    }, []);

    return (
        <div className={styles.specification}>
            {data && (
                <>
                    {selectedCategoryIndex.indexCategory === null ? (
                        <>
                            <div className={styles.back}>
                                <ComeBack customNavigate={onClose}>назад</ComeBack>
                            </div>
                            <h2>Выберите свою специальность:</h2>
                            {data.category?.map((item, index) => (
                                <Block
                                    key={item.id}
                                    onClick={() => setSelectedCategoryIndex({ indexCategory: index, indexPosition: null, indexSpecification: null })}
                                >
                                    {item.name}
                                </Block>
                            ))}
                        </>
                    ) : (
                        <>
                            {selectedCategoryIndex.indexSpecification === null ? (
                                <>
                                    <div className={styles.back}>
                                        <ComeBack
                                            customNavigate={() => {
                                                setSelectedCategoryIndex({
                                                    indexCategory: null,
                                                    indexPosition: null,
                                                    indexSpecification: null,
                                                });
                                            }}
                                        >
                                            назад
                                        </ComeBack>
                                    </div>
                                    <h2>{data.category[selectedCategoryIndex.indexCategory].name}</h2>
                                    {data.category[selectedCategoryIndex.indexCategory].specialities.map((item, index) => (
                                        <Block
                                            key={item.id}
                                            onClick={() => {
                                                onChangeSpecification(item.name);
                                                setSelectedCategoryIndex(prev => ({ ...prev, indexSpecification: index }));
                                            }}
                                        >
                                            {item.name}
                                        </Block>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <div className={styles.back}>
                                        <ComeBack
                                            customNavigate={() => {
                                                setSelectedCategoryIndex(prev => ({ ...prev, indexSpecification: null }));
                                            }}
                                        >
                                            назад
                                        </ComeBack>
                                    </div>
                                    <h2>Выберите вашу позицию:</h2>
                                    {selectedCategoryIndex.indexPosition === null &&
                                        data.positionRole.map(position => (
                                            <Block
                                                key={position}
                                                onClick={() => {
                                                    onChangePosition(position);
                                                    onClose();
                                                }}
                                            >
                                                {position}
                                            </Block>
                                        ))}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default RegisSpecification;
